const setDefaultProps = (Component, defaultProps) => {
  const componentRender = Component.render
  if(!componentRender) {
    Component.defaultProps = defaultProps
    return
  }

  Component.render = (props, ref) => {
    props = {
      ...defaultProps,
      ...props,
      style: [defaultProps.style, props.style],
    }

    return componentRender.call(this, props, ref)
  }
}

export default setDefaultProps