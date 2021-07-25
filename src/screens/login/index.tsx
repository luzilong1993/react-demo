import * as React from 'react';

const apiUrl = process.env.REACT_APP_API_URL
export const LoginScreen = () => {

    const login = (param: { userName: string, password: string }) => {
        fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        }).then(async res => {
            if (res.ok) {

            }
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const userName = (event.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
        login({ userName, password })
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userName">用户名</label>
                <input type="text" id={'userName'} />
            </div>
            <div>
                <label htmlFor="password">密码</label>
                <input type="text" id={"password"} />
            </div>
            <button type={"submit"}>登录</button>
        </form>
    )
}