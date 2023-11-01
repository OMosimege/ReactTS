import { ChildAsFC } from './Child';

const Parent = () => {
    return <ChildAsFC colour="red" onClick={() => console.log("Clicked")} >

    </ChildAsFC>;
};

export default Parent;