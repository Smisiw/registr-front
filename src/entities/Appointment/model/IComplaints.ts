export interface IComplaints {
    note: string,
    [other: string]: unknown
}

export interface IClinicalConditions {
    height: number,
    weight: number,
    bmi: number,
    systolic_bp: number,
    diastolic_bp: number,
    heart_rate: number,
    six_min_walk_distance: number,
    other_symptoms: string
    [other: string]: unknown
}