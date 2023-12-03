import React, {ChangeEvent} from 'react';

class ProfileStatus extends React.Component<any> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true,
            status: this.props.status
        })
    }
    deActivateEditMode() {
        this.setState({
            editMode: false
        });
        this.props.updateStatusThink(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {

        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
            <div>{
                !this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
                    </div>
                    :
                    <div>
                        <input
                            type="text"
                            value={this.state.status}
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deActivateEditMode.bind(this)}/>
                    </div>}
            </div>
        );
    }
}

export default ProfileStatus;