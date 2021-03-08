import { SvgIconTypeMap } from "@material-ui/core"
import { OverridableComponent } from "@material-ui/core/OverridableComponent"

export type Category = {
    name: string,
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    color: string
}

export type Operation = {
    id: number,
    sum: number,
    category: string,
    date: string,
    description?: string,
}

export type GroupedOperations = { [key: string]: Operation[] }