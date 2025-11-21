export interface TaskSummaryDto {
    id: number;
    title: string;
    isCompleted: boolean;
    submissionDate: Date | null;
}