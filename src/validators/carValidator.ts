import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .messages({'string.pattern.base': 'Your brand value did not match pattern.'}),
    price: Joi.number().min(0).max(1000000)
        .messages({
            'number.min': 'min = 0',
            'number.max': 'max = 1000000',
        }),
    year: Joi.number().min(1990).max(2025).messages({
        'number.min': 'min = 1990',
        'number.max': 'max = 2025',
    }),
})