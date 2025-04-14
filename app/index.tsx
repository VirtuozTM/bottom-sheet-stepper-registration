import React, { useRef } from "react";
import BottomSheetStepper, {
  BottomSheetStepperRef,
  StepComponentProps,
} from "../components/BottomSheetStepper";
import { Pressable, View, Text } from "react-native";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";

const Step1Wrapper = (props: StepComponentProps) => (
  <Step1 onNext={props.onNextPress} onBack={props.onBackPress} />
);
const Step2Wrapper = (props: StepComponentProps) => (
  <Step2
    onNext={props.onNextPress}
    onBack={props.onBackPress}
    onEnd={props.onEnd}
  />
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
        steps={[Step1Wrapper, Step2Wrapper]}
      />
    </View>
  );
};

export default Index;
