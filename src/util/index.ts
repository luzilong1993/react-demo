import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => value === 0 ? true : !!value


// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object: object) => {
    const result = { ...object };
    Object.keys(result).forEach(key => {
        // @ts-ignore
        const value = result[key]
        if (!isFalsy(value)) {
            // @ts-ignore
            delete result[key]
        }
    })

    return result
}

// 自己写useMount hook
export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
}

// useDebounce 防抖
// 用泛型来规范类型
export const useDebounce = (value: unknown, delay?: number) => {

    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        //每次在value变化以后设置定时器
        const timeout = setTimeout(() => setDebounceValue(value), delay)
        // 每次在上一个useEffect处理完以后再运行
        return () => clearTimeout(timeout)
    }, [value, delay])

    return debounceValue
}
