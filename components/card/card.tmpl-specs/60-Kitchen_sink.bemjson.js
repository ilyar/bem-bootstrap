([
    {
        block: 'card',
        content: [{
            elem: 'img',
            elemMods: {top: true},
            attrs: {
                alt: "text",
                src: '...',
            },
        }, {
            elem: 'body',
            content: [{
                elem:'title',
                content: 'Card title',
            },
            {
                elem: 'text',
                content: "text"
            }, ],
        },
        {
            elem: 'body',
            content: [{
                elem: 'link',
                url: '#',
                content: 'link'
            }, {
                elem: 'link',
                url: '#',
                content: 'link'
            }, ],
        }, ]
    }
]);
