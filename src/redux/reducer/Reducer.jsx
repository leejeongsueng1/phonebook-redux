let initialState = {
    contactList:[{name:"김철수",phoneNumber:"01012345678" },
        {name:"김영희",phoneNumber:"01043218765" },
        {name:"최강자",phoneNumber:"01054329876" },
        {name:"이순신",phoneNumber:"01054329876" },
        {name:"유관순",phoneNumber:"01054329876" },
    ],
    searchString: '',
};

export function reducer (state = initialState,action) {
    const {type, payload} = action
    switch (type){
        case "ADD_CONTACT":
            return {...state, contactList:[...state.contactList,{name:payload.name,phoneNumber:payload.phoneNumber}]};
        case "SEARCH":
            return {...state, searchString: payload.searchString};
        default:
            return {...state};
    }


}