import {followAC, PostType, profileType, unFollowAC} from "../redux/users-reducer";

export const updateObjectInArray = (users: Array<PostType>, objPropName: keyof PostType, itemId: string, followed: boolean) => {
    return users.map(i => {
        if(i[objPropName] === itemId){
            return {...i, followed}
        }
        return i;
    })
}
