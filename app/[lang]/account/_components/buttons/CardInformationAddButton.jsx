"use client";
import Modal from "@/app/components/Modal/Modal";
import { Flex } from "@radix-ui/themes";
import FormControl from "../FormControl";
import SubmitButton from "@/app/components/SubmitButton/SubmitButton";
import { useState } from "react";
import { toast } from "sonner";
import cardInformationAction from "@/app/server/actions/account/cardInformation";

const CardInformationAddButton = () => {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(null);

    const handleCardInformation = async (formData) => {
        setError(null)
        try {
            const cardInformation = await cardInformationAction(formData);
            if (cardInformation.errors) {
                setError(cardInformation.errors)
                return;
            }
            if (cardInformation.success) {
                toast.success(cardInformation.message);
                setOpen(false);
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>

            <Modal open={open} setOpen={setOpen} name="Add Card Information" hading="Card Information">
                <form action={handleCardInformation}>
                    <Flex direction="column" gap="3">
                        <FormControl label="Holder Name" type="text" name="name" >
                            {
                                error && error?.holderName?.map((n, i) => <p className='text-red-500' key={i}>
                                    <small>
                                        {n}
                                    </small>
                                </p>)
                            }
                        </FormControl>
                        <FormControl label="Card Number" type="number" name="no" >
                            {
                                error && error?.cardNumber?.map((n, i) => <p className='text-red-500' key={i}>
                                    <small>
                                        {n}
                                    </small>
                                </p>)
                            }
                        </FormControl>
                        <FormControl label="Card CVC" type="number" name="cvc" >
                            {
                                error && error?.cvc?.map((n, i) => <p className='text-red-500' key={i}>
                                    <small>
                                        {n}
                                    </small>
                                </p>)
                            }
                        </FormControl>
                    </Flex>
                    <div className="mt-4">
                        <SubmitButton>
                            Save
                        </SubmitButton>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default CardInformationAddButton;