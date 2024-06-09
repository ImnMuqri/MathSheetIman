import axios, { AxiosResponse } from "axios";
import { IPlayer } from "../type/Player";

const baseURL = "math-sheet-be.vercel.app";

const PlayerServices = {
  getPlayers: async (): Promise<IPlayer[]> => {
    try {
      const response: AxiosResponse<IPlayer[]> = await axios.get(
        `${baseURL}/players`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching players:", error);
      throw error;
    }
  },

  createPlayer: async (playerData: IPlayer): Promise<IPlayer> => {
    try {
      const response: AxiosResponse<IPlayer> = await axios.post(
        `${baseURL}/players`,
        playerData
      );
      return response.data;
    } catch (error) {
      console.error("Error creating player:", error);
      throw error;
    }
  },
};

export default PlayerServices;
