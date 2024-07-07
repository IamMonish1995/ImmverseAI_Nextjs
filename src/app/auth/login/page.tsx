"use client";
import useStorage from "@/hooks/useStorage";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const { setToken } = useStorage();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const options = {
        url: "https://jsonplaceholder.typicode.com/users/1",
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: formData,
      };
      const response = await axios(options);
      setToken(
        "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..sFxs6brEUHKlHeJv.oSTUz7hRKmq5YIRZKSLNHT8O54_oz6AkFrsBzyHF1L0H2WoW07B7H4-PnQJR35sG3YzzjRxtKq-Bx2k9jCiMIdjXUulAwfx2ujQG7DPnSUMQAnN_EN2VPZWvw7yq31iDTSTkG9cW--GTIIDyNgWXVq6YD4N80nRYdjJk6o28__n_TKeuzXXnfUW4SDu7zO_sxYDy3ac376G96Hr9rCinF2m_UB3dgDXUDaYJW6_dha2Zpfhpg71Jf3LB-Et2IHvN3hoAzhbcASNHh36dCVZ3VkSJsijQEQMt5IOYM1ZrUQ2deX8qaiPcSsVm1_OntbdJ5TNlGm1nF-h9zPp7h24pWhPLl2-omPR8ZkyH--ReSxzFM9_7YVe2dUaZCL1TymYbi7BDKy26EB4ihRoVYwAhbFpdbJPDhVTlA62FpbcXd8m1gaNl6hE6jmyKo2RYg3zPZHW3PIj6pDZK2wTZn7mzB3iYh7j3ZLanYgKS5O0m1ZJBd4i6KwvuCly5_y6FmdcxfIvWKXqeCo1OiRidZFhCMI2j15VpF_n1m5UFTyu_VdtKjTLoYDq9segUuvv6gn9R07wjrbEImVQNPg_zWN-fjuZE-ky5413MZ8sVv05lQltpudj2PYzn20sRWv6Qxf-RFgE4pxCnPq0WP7nAwHTlCLjcMc4BjUNSmyBhyPXI-ZKVwuiGzkOpJdpo3Ph2v08vmImDOE2vJuofLwIgC2mAxcOiIrA9400yLPHqAz63v9W_hL_TbzVaph9eToHIBc3tLtdREaNhD20utL_OOoY3SJsdIJz8oc7CYF-ISNZabU6KeWMDzlI12nX-cnOOFbzgWY2ubQw_Ml9LpesHjjpWV_SdWAypqhHqevxut2gYKPfZdYfeGdS03C_Q_CL-KyYf6zU0Uwn7oO3nemCAwhZKhpc77b67GfJA07ed1wUAeeg1KOZLhFcKrS3WHkp6r31MJ120V_o-7B9RPhkBdKx0zSAsJkSA47ykeXiiH_uMYkbadxEzitkgy5DuUn5fPWCITqmGqCn04aC--vsWocW9iAbGfRfGTOQ5q0IzFqugWU6m6cryx-Eks3qQsXvL3VMyEiaB2ARonyREnIbJFFjg-bEbTU7P2PQ3gx787SKVaYvgOWsClT7-8lOSqzL30DkReH5CuN4Ssk-RjsjRwXy1etF_TdeKJ1vMRhUP41bbRb8E7xvvTEqA4n9Hj3WVQLkP1ubIT_bHve2ges3n1nqXQyiirgz2l4ihMXz-9JX-MXVdOc_4x_bVjcmbOYCvOmWbfuDLt-evoK96mtCmqCBNhTQWuN-8uwyGIqexQ1a939MQXs-_BGGWE4xa4o5baNA1My2vrEtc5n6o25g536DN8vP3qkWsD4wYTnjoGiZM9B_dcYz398nXy1PKhzyqHC9Wp7djzIp9wwDrC85MBk8eXru6Xf5baZk4GHIZjicouOGCa5IfJhipb2OSkDWR_P2FQuA2ek1QRAO1D8uvmUWyTm52oHqjortL0ZouWmmdhZiQhjetUnombvHZokMyV1yiyyD_ceLSe1dQCoJTfDfYlxPgm-yZ408bRNZvve0FipkeYH89YIVo5o8kaDzYlSq4iZoRqQOSZUUO_QgQTid_7F9cuQqfmzjYpm9qsDwKVCQnXfzaqWwD6x9MQSwkzcUDPsbq13KShoATS6K2aD-dXrdXrdrxhxuA_sDLYvGiHb2u99U_P_Ke9eyTUQJUSK9rpSRWFVIFFSalUKu0yQBgaj5pBjpQbwwLpN774XniAJIFR7RjyVqMnC2y8igdU7xqwJbLlPYIq6jLNY7Cy4Yd_Wl9KXmZ2JLDizZQA0OpIQWW4_FQFkLl5b8QD_j1c2wmOFCkauO_sQNWhIsfH57ybWrLrqOG3-tn3Zbob5UnED2_T12tKU3n12e8MY7ZsG3rC6NTE-1mDRnFbDxA9bB3I5Z0vi5YDnEgx4gP6rhFAjKp5hED82Fgz9fAxV1gjDkvugYLr53xezmN583L8yeSkdbQ8ziF7uxLpMUHcrJR2dIT6PN5bYi8lfINQ6dRffZjmRjm4V68d6tTBL9uFgxUbkqSumYQ2mROIeZS_LxCDI8TB3Vt0d8dtHwVVWWHTWFOdGlV3YQNSU48O15cgTmBL3sTpIVtJT7dAJQT1RnefV44Na3RQjkGbpbL1EiAnGKwEDZEhrUireN74iUqCap4JUB6qt-E4_xmy6fy-6I9G4eXtaP0dis3MaGZvTkFVdavmASHM4jsd4oV-WCuI2YEFFmpurEYENSWKA_ufVc63ixsGmVX42h_U3qU6LEcQBCwF4qlAaS-C7KcBWFeBqyl9dti7oLz1XnQm1C989Ww-dkmL3hFAAhnAsu8Sa9d_CNYhohuRwjvxKqYLHQsA1ws2tHsVwIUO41XPX2vffjBYDqeiUIgxAQU9QAWAiCRq0IAr4OazIeJWYR8soyP3cLseuDAv1mNXexq28F18lJ6O2DcVqz42L149eiK1wgx-9-cLX6EFd5Cc_mrXUlpBgvDLpuHQOgZmpH7yyUvox3sDBYFLohTLaia3WzuSw1v4rCycmCDtPGBDgyOU1XG0JDiNr6e-M5g1s9H0olN6T-TaQcsc3eayC4zRQyTd_BfhEri0FZ7kmPfIvirGnVJwMcIEFctvm-POyz75zh1vNy9YwMMNZY8Bs5091ipa2-BKJRm-Qhi0P_wvbIdetq2J3QMcQlXlBfx4am-LNZlxppjexqUINtFvsZa6QaqhhpmMNiamMn04fWbHmVq7AfDssMvSfeCGi_xXrmCH7m3LJP1VfudYDObXndj5zv4Nku6sTS2HrBqIA6k56o9ocB87pT0Xly9q27EZ2YdkfzBmaeUEibWrdb7hrhepESPTNnDZ3u31sG27MKiNM2wsuZddyzwsM7xIQ1FV7Ga9uaGHtcP6CFFBCc9TDfGLcgmaJn3HQ.Lm4L6rwDI7Zi4SLBbwInCg"
      );
      router.push("/todos");
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <section className="flex flex-col items-center pt-6">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login to an account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="emelia_erickson24"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="**********"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Dont have an account?{" "}
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="/auth/signup"
              >
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
