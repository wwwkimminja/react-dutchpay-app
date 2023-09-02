import { render, screen } from "@testing-library/react"
import CreateGroup from "./CreateGroup"
import userEvent from "@testing-library/user-event"

const renderComponent = ()=>{
  render(<CreateGroup/>)

  const input=screen.getByPlaceholderText('group name');
  const saveBtn=screen.getByText('save');
  const errorMessage = screen.queryByText('please enter group name');

  return {
    input,
    saveBtn,
    errorMessage,
  }
}

describe('CreatGroupPage',()=>{

  test('has group name input component?',()=>{
   const {input,saveBtn}= renderComponent()

    //todo:input component
    expect(input).not.toBeNull();
    //todo:save button
    expect(saveBtn).not.toBeBull();
  })

  test('show error message when press save button without group name',async()=>{
    const {errorMessage,saveBtn}= renderComponent()
  
    await userEvent.click(saveBtn)
    expect(errorMessage).not.toBeNull();

  })
  
  test('no error message when press save button input group name',async()=>{
    const {input,saveBtn,errorMessage}= renderComponent()

    await userEvent.type(input,'mock name')
    await userEvent.click(saveBtn)

    expect(errorMessage).toBeNull();

  })
})