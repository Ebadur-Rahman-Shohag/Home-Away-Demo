"use client";

import { useProperty } from "@/utils/store";
import ConfirmBooking from "./ConfirmBooking";
import BookingForm from "./BookingForm";
function BookingContainer() {
  const {amount} = useProperty((state) => state);

  if (!amount) return null;
  if (amount <= 0) return null;
  return (
    <div className="w-full">
      <BookingForm />
      <ConfirmBooking />
    </div>
  );
}

export default BookingContainer;
