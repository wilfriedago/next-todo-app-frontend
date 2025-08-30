## Transaction

- id: string
- amount: number
- date: Date
- type: "income" | "expense" | "investment"
- description: string
- category: Category
- is_recurring: boolean


## Category

- id: string
- name: string
- description: string
- type: "income" | "expense" | "investment"
- parent: Category | null
