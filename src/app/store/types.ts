import {rootReducer} from "@/app/store/reducers";
import {setupStore} from "@/app/store/store";

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']