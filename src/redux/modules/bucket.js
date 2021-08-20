// Action
const LOAD = 'bucket/LOAD';
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE';
const UPDATE = 'bucket/UPDATE';
// initialState 
const initialState = {
  list: [
    { text: "치킨 먹기", completed: false },
    { text: "컴퓨터 게임하기", completed: false },
    { text: "여행가기", completed: false }
  ]
};

// Action Creators
export const loadBucket = (bucket) => {
  // 불러오는 기능은 어떤 데이터를 줄 필요가 없지만 아래와 모양새를 맞추기 위해 추가.
  return { type: LOAD, bucket };
}

export const createBucket = (bucket) => {
  // 타입뿐만 아니라 데이터도 필요하다. 
  //CreateBucket 같은 경우에는 추가할 값이 필요하다.
  return { type: CREATE, bucket };
}

export const deleteBucket = (bucket) => {
  // 타입뿐만 아니라 데이터도 필요하다. 
  //CreateBucket 같은 경우에는 추가할 값이 필요하다.
  return { type: DELETE, bucket };
}

export const updateBucket = (index) => {
  return { type: UPDATE, index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD":
      return state;

    case "bucket/CREATE":
      const new_bucket_list = [...state.list, { text: action.bucket, completed: false }];
      return { list: new_bucket_list };

    case "bucket/DELETE":
      const bucket_list = state.list.filter((item, index) => index !== action.bucket);
      return { list: bucket_list };

    case "bucket/UPDATE":
      const update_bucket_list = state.list.map((item, index)=>{
        if(index === action.index){
          return{ ...item, completed: true};
        }
        return item;
      })
      return {list: update_bucket_list};

    default:
      return state;
  }
}