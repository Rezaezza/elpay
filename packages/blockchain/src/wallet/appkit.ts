export interface AppKitConfig {
  projectId: string;
}

export function getAppKitConfig(projectId: string): AppKitConfig {
  return {
    projectId,
  };
}