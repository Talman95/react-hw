import React from 'react'
import {TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted} from "react-icons/ti";

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') return down
    if (sort === down) return up
    if (sort === up) return ''

    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const Icon = sort === down
        ? TiArrowSortedDown
        : sort === up
            ? TiArrowSortedUp
            : TiArrowUnsorted

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{display: 'flex', alignItems: 'center'}}
        >
            <Icon size={'16px'}/>
        </span>
    )
}

export default SuperSort
