export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PrefecturesResponse = {
  message?: string | null | undefined;
  result: Array<Prefecture>;
};

export type PopulationPerYear = {
  year: number;
  value: number;
  rate?: number;
};

export type PopulationComposition = {
  label: string;
  data: Array<PopulationPerYear>;
};

export type PopulationCompositionResponse = {
  message?: string | null | undefined;
  result: {
    boundaryYear: number;
    data: Array<PopulationComposition>;
  };
};
