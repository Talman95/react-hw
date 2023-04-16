import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '147px',
                height: '4px',
                margin: '0px 12px',
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    background: '#FFFFFF',
                    border: '1px solid #00CC22',
                    '&:focus, &:hover, &.Mui-active': {
                        boxShadow: 'none',
                    },
                },
                '& .MuiSlider-rail': {
                    opacity: 0.5,
                    backgroundColor: '#8B8B8B',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
