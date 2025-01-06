export default {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
        {
            name: "id",
            title: "ID",
            type: "string",
        },
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "heading",
            title: "Heading",
            type: "string",
        },

        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "heading2",
            title: "Heading2",
            type: "string",
        },

        {
            name: "description2",
            title: "Description2",
            type: "text",
        },
        {
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                },
            ],
        },
        {
            name: "mainImage2",
            title: "Main Image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                },
            ],
        },
        {
            name: "mainImage3",
            title: "Main Image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                },
            ],
        },
        {
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
        },
    ],
};
