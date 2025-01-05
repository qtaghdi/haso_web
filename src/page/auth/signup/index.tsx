import React, { useState, useEffect, Fragment } from "react";
import * as S from "./style";
import Form from "@/components/form";
import { SIGNUP_STEPS } from "./steps";
import { useNavigate } from "react-router-dom";
import { SignUpProps } from "@/type/auth/index.type";
import LargeButton from "@/components/button/large";
import MiddleButton from "@/components/button/middle";
import { Toast } from "@/libs/toast";

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
    const isValidField = (field: string): field is keyof SignUpProps =>
      field in formData;

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 폼 제출 전에 현재 URL의 쿼리 파라미터 제거
    const currentPath = window.location.pathname;
    window.history.replaceState({}, '', currentPath);
    
    if (currentStep === 0) {
      if (formData.password !== formData.passwordConfirm) {
        Toast("error", "비밀번호가 일치하지 않습니다.");
        return;
      }
    }
  
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

  // URL 쿼리 파라미터 제거 함수
  const cleanupQueryParams = () => {
    const currentPath = window.location.pathname;
    window.history.replaceState({}, '', currentPath);
  };

  // 컴포넌트 마운트/언마운트 시 URL 정리
  useEffect(() => {
    cleanupQueryParams();
    return () => {
      cleanupQueryParams();
    };
  }, []);

  return (
    <S.Wrapper>
      <S.BackGround>
        <S.SecondaryCircle />
        <S.PrimaryCircle />
      </S.BackGround>
      <Form onSubmit={handleSubmit}>
        <S.StepIndicator>
          {SIGNUP_STEPS.map((_, index) => (
            <Fragment key={index}>
              <S.StepCircle active={currentStep >= index}>
                {index + 1}
              </S.StepCircle>
              {index < SIGNUP_STEPS.length - 1 && (
                <S.StepLine active={currentStep > index} />
              )}
            </Fragment>
          ))}
        </S.StepIndicator>

        <S.TitleBox>
          <S.Title>계정 생성하기</S.Title>
          <S.Description>먼저 사용자 정보를 입력해주세요.</S.Description>
        </S.TitleBox>

        <S.FieldWrapper>
          {CurrentStepComponent ? (
            <CurrentStepComponent
              signUp={formData}
              onChange={handleInputChange}
            />
          ) : (
            <div>올바르지 않은 단계입니다.</div>
          )}
        </S.FieldWrapper>

        <S.LoginSection>
          <S.ButtonSection>
            {currentStep > 0 && (
              <MiddleButton 
                type="button"
                variant="secondary" 
                onClick={handlePrev}
              >
                이전
              </MiddleButton>
            )}
            {currentStep === 0 ? (
              <LargeButton
                type="submit"
                disabled={!isCurrentStepValid()}
              >
                다음
              </LargeButton>
            ) : currentStep < SIGNUP_STEPS.length - 1 ? (
              <MiddleButton
                type="submit"
                variant="primary"
                disabled={!isCurrentStepValid()}
              >
                다음
              </MiddleButton>
            ) : (
              <LargeButton
                type="submit"
                disabled={!isCurrentStepValid()}
              >
                완료
              </LargeButton>
            )}
          </S.ButtonSection>
          <S.Footer>
            계정이 있으신가요?{" "}
            <S.SignUpLink onClick={handleLogin}>로그인하기</S.SignUpLink>
          </S.Footer>
        </S.LoginSection>
      </Form>
    </S.Wrapper>
  );
};

export default SignUp;