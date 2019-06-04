import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import styled from 'styled-components';
import { COLORS, BREAKPOINTS, EXTRA_WIDE_WIDTH, READING_WIDTH } from '../../../constants';

const MaxWidthWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: ${props => props.maxWidth || `${READING_WIDTH}px`};
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
  @media ${BREAKPOINTS.sm} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;


/**
 * this component is take reference from:
 * https://github.com/joshwcomeau/blog/blob/master/src/components/LiveEditableCode/LiveEditableCode.js
 */
export default class LiveEditableCode extends PureComponent {
  static propTypes = {
    // `id` needed for analytics
    id: PropTypes.string.isRequired,
    // `gistId` needed for mobile, since we don't embed code on mobile.
    // (I haven't figured out how to make it a good experience :/)
    gistId: PropTypes.string,

    code: PropTypes.string.isRequired,
    scope: PropTypes.object,
    size: PropTypes.oneOf(['normal', 'extra-wide']),
    split: PropTypes.arrayOf(PropTypes.number),
    maxHeight: PropTypes.number,
  };

  static defaultProps = {
    split: [66, 34],
  };

  state = {
    hasBeenMounted: false,
  };

  componentDidMount() {
    // HACK - There's an issue with React-Live and SSR.
    // To avoid dealing with this issue for now, I'm just not rendering things
    // on the initial pass.
    this.setState({ hasBeenMounted: true });
  }



  render() {
    const { gistId, code, scope, size, split, maxHeight } = this.props;
    const [leftSplit, rightSplit] = split;

    const maxWidth =
      size === 'extra-wide' ? `${EXTRA_WIDE_WIDTH}px` : undefined;

    if (!this.state.hasBeenMounted) {
      return null;
    }

    return (
      <LiveProvider
        code={code}
        scope={scope}
        noInline={true}
        mountStylesheet={false}
      >
          <Wrapper maxWidth={maxWidth}>
            <EditorWrapper split={leftSplit} maxHeight={maxHeight}>
              <LiveEditor />
            </EditorWrapper>

            <PreviewWrapper split={rightSplit}>
              <LiveError />
              <LivePreview />
            </PreviewWrapper>

            <NotAvailableWrapper>
              Live-editable code not available on smaller screens.{' '}
              {gistId && <TextLink href={gistUrl}>View the gist</TextLink>}
            </NotAvailableWrapper>
          </Wrapper>
      </LiveProvider>
    );
  }
}

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 72px;
  @media ${BREAKPOINTS.md} {
    flex-direction: column;
  }
`;

const DesktopOnly = styled.div`
  @media ${BREAKPOINTS.md} {
    display: none;
  }
`;

const MobileOnly = styled.div`
  @media ${BREAKPOINTS.mdMin} {
    display: none;
  }
`;

const EditorWrapper = styled(DesktopOnly)`
  /* padding: 32px; */
  flex: ${props => props.split};
  background: #f8f8f8;
  max-height: ${props => props.maxHeight}px;
  overflow: auto;
`;

const NotAvailableWrapper = styled(MobileOnly)`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: ${COLORS.gray[50]};
  padding: 25px;
  text-align: center;
`;

const PreviewWrapper = styled.div`
  padding: 32px;
  flex: ${props => props.split};
  background: #f8f8f8;
  @media ${BREAKPOINTS.md} {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  @media ${BREAKPOINTS.mdMin} {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

