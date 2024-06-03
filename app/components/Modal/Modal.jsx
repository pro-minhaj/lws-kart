"use client";
import { Button, Dialog } from "@radix-ui/themes";
import { IoMdClose } from "react-icons/io";

const Modal = ({ name, hading, open, setOpen, children }) => {
    return (
        <>
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger>
                    <Button className="!cursor-pointer !w-full !py-2">{name}</Button>
                </Dialog.Trigger>

                <Dialog.Content className="relative" maxWidth="450px">
                    <div className="absolute top-2 right-2">
                        <Dialog.Close>
                            <Button className="!cursor-pointer" variant="soft" color="gray">
                                <IoMdClose />
                            </Button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Title>{hading}</Dialog.Title>
                    {children}
                </Dialog.Content>
            </Dialog.Root>
        </>
    );
};

export default Modal;