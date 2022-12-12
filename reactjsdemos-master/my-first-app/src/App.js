import React from 'react';
import './App.css';
// import ClassComponentWithState from './Components/ClassComponentWithState';
// import ComponentWithUncontrolledInput from './Components/ComponentWithUncontrolledInput';
// import ComponentWithControlledInput from './Components/ComponentWithControlledInput';
// import FormSubmit from './Components/FormSubmit';
import ComponentWithProps from './Components/ComponentWithProps';
// import ComponentWithArrayOfData from './Components/ComponentWithArrayOfData';
// import ComponentConditionalRender from './Components/ComponentConditionalRender';
// import ComponentConditionalTernaryRender from './Components/ComponentConditionalTernaryRender';
// import ComponentConditionalLogicalRender from './Components/ComponentConditionalLogicalRender';
// import ClassComponenentClock from './Components/ClassComponentClock';
// import FunctionComponentClock from './Components/FunctionComponentClock';


function App() {
    const someValue = 10;

    const someDataObject = {
        key1: `value1`,
        key2: 2,
        key3: [`array`, `of`, `strings`]
    };

    const someDataArray = [0, 1, 2, 3, 4];

    const someFunction = () => (`a string from a function`);


    return (
        <React.Fragment>
            <ComponentWithProps
                headerText="Heading text from headerText prop"
                numericProp={"100"}
                expressionProp={100 / 5}
                valueProp={someValue}
                objectProp={someDataObject}
                arrayProp={someDataArray}
                functionProp={someFunction}
                unsuppliedProp="Hello World from parent"
            />
            {/* <ComponentWithArrayOfData /> */}
            {/* <ComponentConditionalRender /> */}
            {/* <ComponentConditionalTernaryRender /> */}
            {/* <ComponentConditionalLogicalRender /> */}
            {/* <ClassComponentWithState /> */}
            {/* <ComponentWithUncontrolledInput /> */}
            {/* <ComponentWithControlledInput /> */}
            {/* <FormSubmit /> */}
            {/* <div className="flex-container">
                <ClassComponenentClock />
                <FunctionComponentClock />
            </div> */}
        </React.Fragment>
    );
}

export default App;
