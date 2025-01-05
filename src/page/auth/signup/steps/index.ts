import React from "react";
import One from "@/page/auth/signup/steps/one";
import Two from "@/page/auth/signup/steps/two";
import Three from "@/page/auth/signup/steps/three";
import { SignUpProps } from "@/type/auth/index.type";

export interface StepProps {
    signUp: SignUpProps;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type FormDataType = {
    [K in keyof SignUpProps]: string;
};

interface StepConfig {
    component: React.ComponentType<StepProps>;
    validate: (data: FormDataType) => boolean;
}

export const SIGNUP_STEPS: StepConfig[] = [
    {
        component: One,
        validate: (data) => !!data.id && !!data.password && !!data.passwordConfirm,
    },
    {
        component: Two,
        validate: (data) => !!data.name && !!data.tel && !!data.telAccess,
    },
    {
        component: Three,
        validate: (data) => !!data.tel && !!data.store_no && !!data.fax_no,
    },
];
