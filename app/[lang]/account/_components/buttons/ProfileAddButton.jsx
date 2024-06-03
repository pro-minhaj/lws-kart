"use client";
import Modal from "@/app/components/Modal/Modal";
import SubmitButton from "@/app/components/SubmitButton/SubmitButton";
import profileAction from "@/app/server/actions/account/profile";
import { Flex } from "@radix-ui/themes";
import { useState } from "react";
import { toast } from "sonner";
import FormControl from "../FormControl";

const ProfileAddButton = () => {
    const [open, setOpen] = useState(false);

    const handleProfile = async (formData) => {
        try {
            const profile = await profileAction(formData);
            if (profile.success) {
                toast.success(profile.message)
                setOpen(false);
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>
            <Modal open={open} setOpen={setOpen} name="Add Profile Information" hading="Personal Profile">
                <form action={handleProfile}>
                    <Flex direction="column" gap="3">
                        <FormControl label="Name" type="text" name="name" />
                        <FormControl label="Phone" type="number" name="phone" />
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

export default ProfileAddButton;