import React, { useState } from "react";
import * as S from "./style";
import Form from "@/components/form";
import { SIGNUP_STEPS } from "./steps";
import { useNavigate } from "react-router-dom";
import { SignUpProps } from "@/type/auth/index.type";
import LargeButton from "@/components/button/large";
import MiddleButton from "@/components/button/middle";

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<SignUpProps>({
    name: "",
    id: "",
    password: "",
    passwordConfirm: "",
    tel: "",
    telAccess: "",
    business_name: "",
    store_no: "",
    fax_no: "",
  });
  const navigate = useNavigate();

  const CurrentStepComponent = SIGNUP_STEPS[currentStep]?.component;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isValidField = (field: string): field is keyof SignUpProps => field in formData;

    if (isValidField(name)) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const isCurrentStepValid = () => {
    const { validate } = SIGNUP_STEPS[currentStep];
    return validate ? validate(formData) : true;
  };

  const handleNext = () => {
    if (currentStep < SIGNUP_STEPS.length - 1 && isCurrentStepValid()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <S.Wrapper>
      <S.BackGround>
        <S.SecondaryCircle />
        <S.PrimaryCircle />
      </S.BackGround>
      <Form>
        <S.StepIndicator>
          {SIGNUP_STEPS.map((_, index) => (
            <React.Fragment key={index}>
              <S.StepCircle active={currentStep >= index}>{index + 1}</S.StepCircle>
              {index < SIGNUP_STEPS.length - 1 && <S.StepLine active={currentStep > index} />}
            </React.Fragment>
          ))}
        </S.StepIndicator>

        <S.TitleBox>
          <S.Title>계정 생성하기</S.Title>
          <S.Description>먼저 사용자 정보를 입력해주세요.</S.Description>
        </S.TitleBox>

        <S.FieldWrapper>
          {CurrentStepComponent ? (
            <CurrentStepComponent signUp={formData} onChange={handleInputChange} />
          ) : (
            <div>올바르지 않은 단계입니다.</div>
          )}
        </S.FieldWrapper>

        <S.LoginSection>
          <S.ButtonSection>
            {currentStep > 0 && <MiddleButton variant="secondary" onClick={handlePrev}>이전</MiddleButton>}
            {currentStep === 0 ? ( // Step이 One일 경우
              <LargeButton onClick={handleNext} disabled={!isCurrentStepValid()}>
                다음
              </LargeButton>
            ) : (
              currentStep < SIGNUP_STEPS.length - 1 ? (
                <MiddleButton variant="primary" onClick={handleNext} disabled={!isCurrentStepValid()}>
                  다음
                </MiddleButton>
              ) : (
                <LargeButton /*onClick={handleSubmit}*/ disabled={!isCurrentStepValid()}>
                  완료
                </LargeButton>
              )
            )}
          </S.ButtonSection>
          <S.Footer>
            계정이 있으신가요? <S.SignUpLink onClick={handleLogin}>로그인하기</S.SignUpLink>
          </S.Footer>
        </S.LoginSection>
      </Form>
    </S.Wrapper>
  );
};

export default SignUp;
