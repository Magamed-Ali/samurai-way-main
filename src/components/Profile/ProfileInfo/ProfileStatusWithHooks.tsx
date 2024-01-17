import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusWithHooksType = {
    status: string,
    updateStatusThink: (tl: string) => void
}
const ProfileStatusWithHooks  = (props: ProfileStatusWithHooksType) =>  {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
        setStatus(props.status)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatusThink(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
        return (
            <div>{
                !editMode ?
                    <div>
                        <span onDoubleClick={activateEditMode}>{status || '======='}</span>
                    </div>
                    :
                    <div>
                        <input
                            type="text"
                            value={status}
                            onChange={onStatusChange}
                            autoFocus={true}
                            onBlur={deActivateEditMode}/>
                    </div>}
            </div>
        );
}

export default ProfileStatusWithHooks;