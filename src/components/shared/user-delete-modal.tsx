import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { UserD } from "@/types";
import { Calendar1Icon, TriangleAlert, User2Icon } from "lucide-react";

const UserDeleteModal = ({
  open,
  onOpenChange,
  user,
  delUser,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  user: UserD | undefined;
  delUser: (id: string) => void;
}) => {
  if (user === undefined) {
    return null;
  }
  //   const getFormatedDate = (dateProp: string) => {
  //     const date = new Date(dateProp as string);

  //     const day = String(date.getUTCDate()).padStart(2, "0");
  //     const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  //     const year = date.getUTCFullYear();

  //     const formatted = `${day}-${month}-${year}`;

  //     return formatted;
  //   };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>
            <div className="w-full flex items-center justify-center">
              <div className="w-max h-max p-5 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center">
                <TriangleAlert className="w-10 h-10 shrink-0 text-red-500" />
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="w-full h-max">
          <div className="w-full h-max">
            <div className="w-full">
              <h2 className="font-semibold text-xl text-center">
                Delete Team Member
              </h2>
              <p className="text-center">
                This action cannot be undone. This will permanently remove the
                reservation event.
              </p>
            </div>

            <div className="w-full p-4 rounded-md border border-gray-300 mt-4 bg-gray-100">
              <div className="w-full flex items-center justify-start gap-2.5">
                <div className="h-max w-max p-3 rounded-full bg-white">
                  <User2Icon />
                </div>
                <div className="-space-y-1.5">
                  <p className="font-medium">{user.name}</p>
                  <p className="">{user.email}</p>
                </div>
              </div>
              <div className="w-full grid grid-cols-2 mt-6">
                <div className="w-full flex items-center justify-start gap-2.5">
                  <div className="h-max w-max p-2 rounded-full ">
                    <Calendar1Icon className="w-4 h-4 shrink-0" />
                  </div>
                  <div className="">
                    <p className="text-xs font-medium text-gray-500">Role</p>
                    <p className="text-sm">{user.Role}</p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-start gap-2.5">
                  <div className="h-max w-max p-2 rounded-full ">
                    <Calendar1Icon className="w-4 h-4 shrink-0" />
                  </div>
                  <div className="">
                    <p className="text-xs font-medium text-gray-500">Salary</p>
                    <p className="text-sm">{user.salary}</p>
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter className="w-full mt-4">
              <Button
                className="w-full bg-red-500 hover:bg-red-600 focus:border-none focus:ring-0 focus-visible:ring-0"
                type="submit"
                onClick={() => {
                  onOpenChange(false);
                  console.log({ id: user.id });
                  delUser(user.id);
                }}
              >
                Yes, Delete
              </Button>
            </DialogFooter>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default UserDeleteModal;
