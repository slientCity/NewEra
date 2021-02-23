import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


const INFOS = [
  {
    img: 'assets/images/headicon/member1.jpg',
    name: '成员A',
    notice:{
      top: '无',
      inGroup: '联络ON Review设计。',
      individual: '无',
      clock: '下周三不在'
    },
    tags:[
          {
          class: 'bg-orange-500',
          content: `团队领袖`,
          },
          {
            class: 'bg-purple-500',
            content: `语言交流`,
          },
          {
            class: 'bg-purple-500',
            content: `前端设计`,
          },
          {
            class: 'bg-purple-500',
            content: `后端设计`,
          },
          {
            class: 'bg-orange-500',
            content: `前端击破`,
          },
          {
            class: 'bg-purple-500',
            content: `后端击破`,
          },          {
            class: 'bg-blue-500',
            content: `测试`,
          }
      ],
  },
  {
    img: 'assets/images/headicon/member2.jpg',
    name: '成员B',
    notice:{
      top: '无',
      inGroup: '无',
      individual: '无',
      clock: '无'
    },
    tags:[
      {
        class: 'bg-blue-500',
        content: `团队领袖`,
        },
      {
        class: 'bg-purple-500',
        content: `语言交流`,
      },
      {
        class: 'bg-purple-500',
        content: `前端设计`,
      },
      {
        class: 'bg-purple-500',
        content: `前端击破`,
      }
  ],
  },
  {
    img: 'assets/images/headicon/member3.jpg',
    name: '成员C',
    notice:{
      top: '明天半天Training，下午开始实作业',
      inGroup: '无',
      individual: '无',
      clock: '无'
    },
    tags:[
      {
        class: 'bg-gray-500',
        content: `语言交流`,
      },
      {
        class: 'bg-purple-500',
        content: `后端设计`,
      },
      {
        class: 'bg-orange-500',
        content: `后端击破`,
      }
  ],
  },
  {
    img: 'assets/images/headicon/member4.jpg',
    name: '成员D',
    notice:{
      top: '请通知ON加紧review。',
      inGroup: '今天开始测试',
      individual: '无',
      clock: '无'
    },
    tags:[
      {
        class: 'bg-blue-500',
        content: `语言交流`,
      },
      {
        class: 'bg-green-500',
        content: `后端击破`,
      },
      {
        class: 'bg-blue-500',
        content: `测试`,
      }
  ],
  },
  {
    img: 'assets/images/headicon/member5.jpg',
    name: '成员E',
    notice:{
      top: '明天休假',
      inGroup: '无',
      individual: '无',
      clock: '无'
    },
    tags:[
      {
        class: 'bg-green-500',
        content: `语言交流`,
      },
      {
        class: 'bg-green-500',
        content: `后端击破`,
      },
      {
        class: 'bg-green-500',
        content: `测试`,
      }
  ],
  },
];

@Injectable()
export class DashboardService {

  stats = [
    {
      title: '任务完成率',
      amount: '20',
      total: '70',
      progress: {
        value: 28.6,
      },
      color: 'bg-white-500',
    },
    {
      title: '任务延误率',
      amount: '4',
      total: '8',
      progress: {
        value: 50,
      },
      color: 'bg-white-500',
    },
    {
      title: '额外需求反映率',
      amount: '2',
      total: '17',
      progress: {
        value: 11.8,
      },
      color: 'bg-white-500',
    },
    {
      title: '测试：',
      task: '单元测试',
      amount: '76',
      total: '140',
      progress: {
        value: 54.3,
      },
      color: 'bg-white-500',
    },
  ];

  charts = [
    {
      chart: {
        height: 350,
        type: 'line',
        toolbar: false,
      },
      plotOptions: {
        bar: {
          horizontal: false, // 是否启用水平方式显示
          columnWidth: '12px', // 设置柱状图单个的宽度
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      colors: ["#26A69A", "#FFCC80", "#E57373"],
      fill: {
        opacity: 1 //设置图形的透明度，数值越小透明度越高，数值范围0-1
      },
      series: [
        {
          name: '计划任务',
          data: [70, 68, 67, 67, 66, 64, 64, 62, 57, 54, 53, 50, 47, 47, 43, 41, 40, 33],
        },
        {
          name: '实际任务',
          data: [70, 70, 66, 65, 65, 65, 65, 65, 64, 64, 59, 57, 57, 55, 53, 52, 50, null],
        },
        {
          name: '新增任务',
          type: 'bar',
          data: [8, 5, 3, 2, 7, null, 2, 7, 13, 4, 2, 4, 1, null, 3, 3, 3, null],
        },
      ],      
      xaxis: {
        type: 'date',
        categories: [
          '12/30',
          '01/01',
          '01/03',
          '01/05',
          '01/07',
          '01/09',
          '01/11',
          '01/13',
          '01/15',
          '01/17',
          '01/19',
          '01/21',
          '01/23',
          '01/25',
          '01/27',
          '01/29',
          '01/31',
          '02/02',
        ],
      },
      tooltip: {
        x: {
          format: 'MM/dd',
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
      },
    },
    {
      chart: {
        height: 350,
        type: 'radar',
      },
      series: [
        {
          name: '完成度',
          data: [93, 88, 88, 43, 20, 0, 0]
        },
      ],
      labels: ['概要', '基本设计', '详细设计', '实施', '单元测试', '结合测试', '用户测试'],
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColor: '#e9e9e9',
            fill: {
              colors: ['#ECEFF1', '#FAFAFA'],
            },
          },
        },
      },
      colors: ['#009688'],
      markers: {
        size: 5,
        colors: ['#fff'],
        strokeColor: '#009688',
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: (val: number) => {
            return val;
          },
        },
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: (val: number, i: number) => {
            if (i % 2 === 0) {
              return val;
            } else {
              return '';
            }
          },
        },
      },
    },
  ];

  targetAmount: number;
  finalAmount: number;
  addRequest: number;
  percentage: number;

  constructor(private http: HttpClient) {
    this.targetAmount = 30;
    this.finalAmount = 20;
    this.addRequest = 67;
    let allTask = this.charts[1].series[0].data;
    this.percentage = (allTask.reduce((total, item) => total + item, 0))/700;
  }

  ngOnInit() {
  }
  getData() {
    return ELEMENT_DATA;
  }

  getInfos() {
    return INFOS;
  }

  getCharts() {
    return this.charts;
  }

  getStats() {
    return this.stats;
  }
}
