import React, { useRef } from "react";
import BottomSheetStepper, {
  BottomSheetStepperRef,
  StepComponentProps,
} from "../components/BottomSheetStepper";
import { Pressable, View, Text } from "react-native";
import Step1Profile from "@/components/Step1Profile";
import Step2Avatar from "@/components/Step2Avatar";
import Step3Confirm from "@/components/Step3Confirm";
const Step1Wrapper = (props: StepComponentProps) => (
  <Step1Profile onNext={props.onNextPress} onBack={props.onBackPress} />
);
const Step2Wrapper = (props: StepComponentProps) => (
  <Step2Avatar onNext={props.onNextPress} onBack={props.onBackPress} />
);
const Step3Wrapper = (props: StepComponentProps) => (
  <Step3Confirm onBack={props.onBackPress} onEnd={props.onEnd} />
);

const Index = () => {
  const stepperRef = useRef<BottomSheetStepperRef>(null);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Pressable
        onPress={() => stepperRef.current?.present()}
        style={{ backgroundColor: "black", padding: 12, borderRadius: 12 }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          Open Stepper
        </Text>
      </Pressable>

      <BottomSheetStepper
        ref={stepperRef}
        steps={[Step1Wrapper, Step2Wrapper, Step3Wrapper]}
      />
    </View>
  );
};

export default Index;
