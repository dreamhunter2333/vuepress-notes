module.exports = {
    title: 'DreamHunter Notes',
    description: '此生无悔入四月，来世愿做友人A',
    theme: 'reco',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '基础知识',
                ariaLabel: 'Base Notes',
                items: [
                    {
                        text: '网络基础',
                        link: '/base-notes/network/0_summary'
                    },
                    {
                        text: 'HTTP',
                        link: '/base-notes/http'
                    },
                    {
                        text: 'IO 模型',
                        link: '/base-notes/socket-io'
                    },
                    {
                        text: '计算机操作系统',
                        link: '/base-notes/compute-os/0_compute-os-summary'
                    }
                ]
            },
            { text: '参考资料', link: 'https://www.cyc2018.xyz' }
        ],
        author: 'Dreamhunter',
        smoothScroll: true,
        subSidebar: 'auto',
        sidebar: 'auto',
        // Git 仓库和编辑链接
        repo: 'https://github.com/jinmu333/vuepress-notes', // 你的仓库
        repoLabel: 'GitHub', // 导航栏上的文本
        lastUpdated: '上次更新',
        // 备案
        record: '鲁ICP备2021007677号',
        recordLink: 'http://beian.miit.gov.cn/',
        // 项目开始时间，只填写年份
        startYear: '2021'
    },
    plugins: [
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        }],
        ["vuepress-plugin-auto-sidebar", {
            titleMap: {
                "base-notes": "基础知识",
                "network": "计算机网络"
            }
        }],
    ]
}