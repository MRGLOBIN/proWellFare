import { CustomButton, CustomNumberField } from "@/app/ui/custom-components";

const PhoneNumber = ({
  handleConfirmNumer,
}: {
  handleConfirmNumer: () => void;
}) => {
  return (
    <>
      <form className="w-full mb-10">
        <div className="flex flex-col w-full">
          <CustomNumberField
            label="Phone Number"
            variant="outlined"
            fullWidth
            type="number"
          />
        </div>
      </form>
      <div className="flex items-center justify-end">
        <CustomButton
          variant="contained"
          sx={{ fontSize: "12px" }}
          onClick={handleConfirmNumer}
        >
          <strong>Confirm</strong>
        </CustomButton>
      </div>
    </>
  );
};

export default PhoneNumber;
