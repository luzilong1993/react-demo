import React from "react";

export const SearchPanel = ({ param, setParam, users }: any) => {

    return (
        <form>
            <div>
                {/* setParam(Object.assign({},param,{name:evt.target.value})) */}
                <input type="text" value={param.name} onChange={evt => setParam({
                    ...param,
                    name: evt.target.value
                })} />

                <select value={param.personId} onChange={evt => setParam({
                    ...param,
                    personId: evt.target.value
                })}>

                    <option value={''}>负责人</option>
                    {
                        users.map((user: any) => <option key={user.id} value={user.id}>{user.name}</option>)
                    }
                </select>
            </div>
        </form>
    )
}