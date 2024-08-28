// 侧边栏配置
export default {

    '/views/CSS/': [
        {
            text: 'CSS',
            // collapsed: true, // 可折叠
            items: [
                { text: '代码块', link: '/views/CSS/CodeBlock' },
                { text: '网格', link: '/views/CSS/Grid' },
            ],
        }
    ],
    '/views/JavaScript/': [
        {
            text: 'JavaScript',
            items: [
                {
                    text: '代码块',
                    collapsed: true, // 可折叠
                    link: '/views/JavaScript/codeBlock/index.md',
                    items: [
                        { text: '介绍', link: '/views/JavaScript/codeBlock/index.md' },
                        { text: '数组', link: '/views/JavaScript/codeBlock/array.md' },
                        { text: '回调函数', link: '/views/JavaScript/codeBlock/callbackFunction.md' },
                    ],
                    activeMatch: '/views/JavaScript/codeBlock',
                },
                { text: '深拷贝&浅拷贝', link: '/views/JavaScript/shadeCopy' },
                {
                    text: 'promise',
                    collapsed: true, // 可折叠
                    link: '/views/JavaScript/promise/index.md',
                    items: [
                        { text: '介绍', link: '/views/JavaScript/promise/index.md' },
                        { text: '控制异步事件执行顺序', link: '/views/JavaScript/promise/asyncFunction.md' },
                    ],
                    activeMatch: '/views/JavaScript/promise',
                },
            ],
        }
    ],
    '/views/Vue/': [
        {
            text: 'Vue3',
            // collapsed: true, // 可折叠
            items: [
                { text: 'nextTick', link: '/views/Vue/Vue3/nextTick' },
                { text: '组件通信', link: '/views/Vue/Vue3/transferData' },
            ]
        },
        {
            text: 'elementPlus',
            // collapsed: true, // 可折叠
            items: [
                { text: 'Button', link: '/views/Vue/elementPlus/Button' },
                { text: 'Dialog', link: '/views/Vue/elementPlus/Dialog' },
            ]
        },
        {
            text: 'vitePress',
            // collapsed: true, // 可折叠
            items: [
                {
                    text: '介绍',
                    activeMatch: '/views/Vue',
                    link: '/views/Vue/vitePress/introduce'
                },
                {
                    text: 'Markdown',
                    collapsed: true, // 可折叠
                    items: [
                        {
                            text: '介绍',
                            collapsed: true, // 可折叠
                            link: '/views/Vue/vitePress/Markdown/introduce'
                        },
                        {
                            text: '标题语法',
                            link: '/views/Vue/vitePress/Markdown/title'
                        },
                        {
                            text: '实体符号',
                            link: '/views/Vue/vitePress/Markdown/entities'
                        },
                    ]
                }
            ]
        },
        {
            text: 'Vue3插件',
            // collapsed: true, // 可折叠
            items: [
                {
                    text: '插件库',
                    link: '/views/Vue/Vue3Plugins/plugins'
                },
                {
                    text: '图表',
                    collapsed: true, // 可折叠
                    items: [
                        {
                            text: '折线图',
                            collapsed: true, // 可折叠
                            link: '/views/Vue/Vue3Plugins/Echarts/lineChart'
                        },
                    ]
                },
            ]
        },
    ],
    '/views/more/': [
        {
            text: 'VSCode',
            items: [
                { text: '设置', link: '/views/more/VSCode/set.md' },
                { text: '插件', link: '/views/more/VSCode/expand.md' },
            ]
        },
    ],
}