
//
export const home = async (req, res) => {
    return res.status(404).json(new JsonR(404, false, 'app-controller-getapp', 'App not found', {}));
};