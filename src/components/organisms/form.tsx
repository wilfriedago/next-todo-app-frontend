import Button from "../atoms/button";
import InputAmount from "../atoms/inputAmount"
import InputDate from "../atoms/inputDate"
import Tabs from "../atoms/tabs"
import Input from "../atoms/input"
import SelectArea from "../atoms/selectArea"
export default function Form() {
  return (
    <>
    <form className=" d-flex flex-column card justify-content-between p-5" style={{height:"30rem"}}>
      <p className="text-center">New Transaction</p>
      <InputAmount></InputAmount>
      <InputDate></InputDate>
      <Tabs></Tabs>
      <Input></Input>
      <SelectArea></SelectArea>
      <Button>Add Transaction</Button>      
    </form>
    </>
  );
}
