import {defineStore} from 'pinia'

export const useBoardStore = defineStore('board', {
    state: () => ({
        projects: [
            {
                id: 1,
                name: 'Mini Trello',

                todo: [
                    {
                        id: 1,
                        title: 'Design header',
                    },
                    {
                        id: 2,
                        title: 'Lag login side',
                    },
                ],

                inProgress: [
                    {
                        id: 3,
                        title: 'Velg farger',
                    },
                ],

                done: [
                    {
                        id: 4,
                        title: 'Spør Geir om hjelp',
                    },
                ],
            },
        ],
    }),
})
