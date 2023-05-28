import React from 'react';

class ProfileStatus extends React.Component<any> {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode() {
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <div>{
                !this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input type="text" value={this.props.status} autoFocus={true} onBlur={this.deActivateEditMode.bind(this)}/>
                    </div>
            }

            </div>
        );
    }


}

export default ProfileStatus;