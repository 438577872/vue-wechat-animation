import { createStore } from 'vuex'
import { Component } from 'vue'

type ComponentWrapper = {
    component: Component,
    props: any
    key: number
}


type StoreState = {
    componentStack: ComponentWrapper[]
}

const store = createStore<StoreState>({
    state: {
        componentStack: []
    },
    getters: {
        componentStack: state => state.componentStack
    },
    mutations: {
        push: (state, payload: ComponentWrapper) => {
            state.componentStack.push(payload)
        },
        pop(state) {
            state.componentStack.pop()
        },
        close(state, { props }) {
            state.componentStack = state.componentStack.filter(item => {
                return item.key != props.i
            })
        }
    }
})

export {
    store
}
