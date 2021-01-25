import { string } from "prop-types";

export default {
    name:"project",
    title: "Project",
    type: "document",
    fields: [
        {
            name:"title",
            type:"string",
        },
        {
            name:"date",
            type:"datetime",
        },
        {
            name:"place",
            type:"string",
        },
        {
            name:"description",
            type:"text",
        },
        {
            name: "link",
            type: "url",
        },
        {
            name:"projectType",
            title:"Project Type",
            type:"string",
            options:{
                list:[
                    {
                        value: "personal",
                        title:"Personal",
                    },    
                    {
                        value: "client",
                        title:"Client",
                    },    
                    {
                        value: "academic",
                        title:"Academic",
                    },    
                ]
            },
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type : "string",
                },
            ],
            options: {
                layout: "tags",
            }
        },
    ],
}