import type {
    Slot,
    Content,
    ComponentConfig
} from "@measured/puck";

export type HeaderProps = {

    content: Slot,
}

export const Header: ComponentConfig<HeaderProps> = {
    fields: {
        content: {
            type: 'slot',
        }
    },
    resolveData: async ({props}) => {
        console.log(JSON.stringify(props));

        return {
            props,
        }
    },
    render: ({ content: Content }) => {
        return (
            < >
                <Content className="flex flex-row gap-3 min-h-48 " />
            </>
        )
    },
    permissions: {
        delete: false,
    },
}