import * as Dialog from "@radix-ui/react-dialog";

import { AiOutlineWarning } from "react-icons/ai";
import Button from "@/components/button";

const Modal = ({
  openModal,
  setOpenModal,
  text,
  action,
  accept,
  cancel,
  title,
}) => {
  return (
    <Dialog.Root open={openModal} className="z-101">
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black opacity-40 fixed bg-cover inset-0 z-101" />
        <Dialog.Content
          onInteractOutside={(e) => setOpenModal(false)}
          className=" h-auto w-4/5 md:w-auto bg-white  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex  items-center border  z-101 p-5"
        >
          <Dialog.Close className="bg-Purple text-white absolute top-4 right-4 rounded-full flex justify-center items-center"></Dialog.Close>
          <div className="h-auto  w-full flex flex-col justify-center">
            <Dialog.Title className="w-full flex flex-col justify-center items-center">
              <span className="w-4/5 md:w-3/5 text-center mb-2 font-bold text-primary text-md">
                {title}
              </span>
            </Dialog.Title>
            <Dialog.Description className="text-font-worksans mt-2  md:mx-12 text-black text-sm  flex flex-col justify-center items-center text-center ">
              <span className="w-4/5 md:w-3/5 text-center">{text}</span>
            </Dialog.Description>
            <Dialog.Description className="mt-6 flex flex-col md:flex-row justify-end gap-3 items-center">
              <Button
                color={"white"}
                label={accept}
                type="button"
                action={async () => {
                  if (action) await action();
                  setOpenModal(false);
                }}
              />

              {cancel && (
                <Button
                  color={"error"}
                  label={cancel}
                  action={() => setOpenModal(false)}
                />
              )}
            </Dialog.Description>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
