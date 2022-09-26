export default {
    name: "name",
    title: "title",
    type: "document",
    fields: [
        {
            name: "location",
            title: "Location",
            type: "geopoint",

        },
        {
            name: "note",
            title: "Note",
            type: "array",
            of: [
                {
                    type: "block",
                    title: "Block",
                    styles: [{
                        title: "Normal", value: "normal",
                        title: "H1", value: "h1",
                    }],

                    lists:[{}],
                    marks:{

                        decorators: [
                            {}
                            
                        ],

                        annotations: [
                            {}
                        ]
                }
                }
            ]
        },

    ]
}