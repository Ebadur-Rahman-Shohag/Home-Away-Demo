import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { useProperty } from "@/utils/store";

function BookingAmount() {
  const [trigger, setTrigger] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);
  const { pending } = useFormStatus();

  useEffect(() => {
    if (trigger) {
      useProperty.setState({ amount }); // Update Zustand state
      setTrigger(false); // Reset trigger
      setAmount(0); // Reset local value
    }
  }, [trigger, amount]);

  function handleChange(e: any) {
    setAmount(Number(e.target.value));
  }

  function handleSubmit() {
    setTrigger(true);
  }

  return (
    <div className="w-full">
      <Label htmlFor="amount" className="capitalize">
        Amount
      </Label>
      <Input
        type="number"
        name="amount"
        value={amount} // Controlled input
        onChange={handleChange} // Handle input changes
        placeholder="Enter Product Amount"
      />
      <Button
        onClick={handleSubmit}
        type="submit"
        disabled={pending}
        className="capitaliz mt-4"
        size="lg"
      >
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait...
          </>
        ) : (
          "Add the item"
        )}
      </Button>
    </div>
  );
}

export default BookingAmount;
