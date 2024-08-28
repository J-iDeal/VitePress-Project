// navbar.mts

export default [
    {
        text: 'Home',
        link: '/'
    },
    {
        text: 'CSS',
        link: '/views/CSS/CodeBlock',
        activeMatch: '/views/CSS',
    },
    {
        text: 'JavaScript',
        link: '/views/JavaScript/codeBlock/index.md',
        activeMatch: '/views/JavaScript',
    },
    {
        text: 'Vue',
        items: [
            {
                text: 'Vue',
                link: '/views/Vue/Vue3/nextTick',
            },
            {
                text: 'elementPlus',
                link: '/views/Vue/elementPlus/Button',
            },
            {
                text: 'VitePress',
                link: '/views/Vue/vitePress/Markdown/introduce',
            },
            {
                text: 'Vue3插件',
                link: '/views/Vue/Vue3Plugins/Echarts/lineChart',
            },
        ],
        activeMatch: '/views/Vue',
    },
    {
        text: 'More',
        items: [
            {
                text: 'VSCode',
                link: '/views/more/VSCode/set',
            },
        ],
        activeMatch: '/views/more',
    },
]
