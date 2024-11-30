"use client";

import { useProperty } from "@/utils/store";
import { Booking } from "@/utils/types";
import BookingAmount from "./BookingAmount";
import BookingContainer from "./BookingContainer";
import { useEffect } from "react";

type BookingWrapperProps = {
  propertyId: string;
  price: number;
  discount: number;
};
export default function BookingWrapper({
  propertyId,
  price,
  discount,
}: BookingWrapperProps) {
  useEffect(() => {
    useProperty.setState({
      propertyId,
      price,
      discount,
    });
  }, []);
  return (
    <>
      <BookingAmount />
      <BookingContainer />
    </>
  );
}
